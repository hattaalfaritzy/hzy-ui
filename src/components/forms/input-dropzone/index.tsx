import { cn } from "@/utils/cn";
import { useState } from "react";
import { Icons, Message } from "@/components/commons";
import type { InputHTMLAttributes } from "react";

export interface IInputDropzoneProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameLabel?: string;
  classNameWrapper?: string;
  label?: string;
  notes?: string;
  errorMessage?: string;
  onFilesDrop: (files: FileList) => void;
  accept?: string;
  maxFiles?: number;
  important?: boolean;
  disabled?: boolean;
  multiple?: boolean;
}

export const InputDropzone = ({
  className,
  classNameLabel,
  classNameWrapper,
  label,
  notes,
  errorMessage,
  onFilesDrop,
  accept = "",
  maxFiles = 3,
  important = false,
  disabled,
  multiple = false,
  ...props
}: IInputDropzoneProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isDragReject, setIsDragReject] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  // Utility function to create a FileList from an array of File objects
  function createFileList(files: File[]): FileList {
    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    return dataTransfer.files;
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(false);
    const files = event.dataTransfer.files;

    if (
      accept &&
      !Array.from(files).every(
        (file) => file && accept.split(",").includes(file.type)
      )
    ) {
      setIsDragReject(true);
      return;
    }

    setIsDragReject(false);

    const newFiles = Array.from(files).filter((file): file is File => !!file);

    const truncatedFiles = multiple
      ? newFiles.slice(0, maxFiles)
      : [newFiles[0]];

    // Ensure truncatedFiles contains only File objects
    const validFiles = truncatedFiles.filter((file): file is File => !!file);

    const combinedFileNames = multiple
      ? [...fileNames, ...validFiles.map((file) => file.name)].slice(
          0,
          maxFiles
        )
      : validFiles.map((file) => file.name);

    setFileNames(combinedFileNames);

    // Convert the new files array to FileList
    const fileList = createFileList(validFiles);
    onFilesDrop(fileList);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).filter((file): file is File => !!file);

      const truncatedFiles = multiple
        ? newFiles.slice(0, maxFiles)
        : [newFiles[0]];

      // Ensure truncatedFiles contains only File objects
      const validFiles = truncatedFiles.filter((file): file is File => !!file);

      const combinedFileNames = multiple
        ? [...fileNames, ...validFiles.map((file) => file.name)].slice(
            0,
            maxFiles
          )
        : validFiles.map((file) => file.name);

      setFileNames(combinedFileNames);

      // Convert the new files array to FileList
      const fileList = createFileList(validFiles);
      onFilesDrop(fileList);
    }
  };

  const handleFileDelete = (fileName: string) => {
    setFileNames((prevFileNames) =>
      prevFileNames.filter((name) => name !== fileName)
    );
  };

  const triggerFileInputClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className={cn("flex flex-col w-full", classNameWrapper)}>
      {label && (
        <div
          className={cn(
            "block font-semibold text-sm text-dark pb-1.5",
            classNameLabel
          )}
        >
          {label}
          {label && important && (
            <span className={cn("after:content-['*'] text-error")} />
          )}
        </div>
      )}
      <div className={cn("block font-light text-sm text-[#888888] pb-1.5")}>
        *{" "}
        {notes ? (
          notes
        ) : (
          <>
            Make sure your document
            <span className="text-[#001A41]">
              {" "}
              has been saved before uploading.
            </span>
          </>
        )}
      </div>
      {fileNames.length > 0 && (
        <div className="flex flex-col w-full pb-2 space-y-1">
          {fileNames.map((data, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center w-full p-1.5 bg-[#2842C8]/5 rounded"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <Icons name="paper-clip" className="fill-dark w-4 h-4" />
                <span className="font-medium text-xs">{data}</span>
              </div>
              <Icons
                name="trash-outline"
                className="fill-error w-4 h-4 cursor-pointer"
                onClick={() => handleFileDelete(data)}
              />
            </div>
          ))}
        </div>
      )}
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInputClick}
        className={cn(
          "border border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer h-[130px]",
          {
            "bg-[#2842C8]/5 border-dark": isDragActive,
            "bg-[#2842C8]/5 border-[#001A41]": !isDragActive && !isDragReject,
            "border-red-500": isDragReject,
          },
          errorMessage && "border-error focus:border-error focus:ring-0"
        )}
      >
        <input
          id="file-input"
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
          {...props}
        />
        <div className="flex flex-row justify-center items-center w-full h-full space-x-2">
          <Icons
            name="file-upload"
            className={cn("w-6 h-6 fill-dark", errorMessage && "fill-error")}
          />
          <div className="flex flex-col justify-start items-start">
            <span
              className={cn(
                "text-dark font-medium text-xs",
                errorMessage && "text-error"
              )}
            >
              Choose Document
            </span>
            <span
              className={cn(
                "text-[#888888] font-light text-xs",
                errorMessage && "text-error"
              )}
            >
              {isDragActive
                ? "Drop the files here..."
                : "Drag & drop files here, or click to select files"}
            </span>
          </div>
        </div>
      </div>
      {errorMessage && <Message className="mt-2" label={errorMessage} />}
    </div>
  );
};

export default InputDropzone;
