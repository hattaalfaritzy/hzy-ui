import { cn } from "@/utils/cn";
import { useState } from "react";
import { Icons } from "@/components/commons";
import type { InputHTMLAttributes } from "react";

export interface IInputDropzone extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameLabel?: string;
  classNameWrapper?: string;
  label?: string;
  errorMessage?: string;
  onFilesDrop: (files: FileList) => void;
  accept?: string;
  maxFiles?: number;
  important?: boolean;
  disabled?: boolean;
}

export const InputDropzone = ({
  className,
  classNameLabel,
  classNameWrapper,
  label,
  errorMessage,
  onFilesDrop,
  accept = "",
  maxFiles = 1,
  important = false,
  disabled,
  ...props
}: IInputDropzone) => {
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

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragActive(false);
    const files = event.dataTransfer.files;

    if (
      accept &&
      !Array.from(files).every((file) => accept.split(",").includes(file.type))
    ) {
      setIsDragReject(true);
      return;
    }

    setIsDragReject(false);

    if (files.length > maxFiles) {
      return;
    }

    setFileNames(Array.from(files).map((file) => file.name));
    onFilesDrop(files);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      if (files.length > maxFiles) {
        return;
      }

      setFileNames(Array.from(files).map((file) => file.name));
      onFilesDrop(files);
    }
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
          }
        )}
      >
        <input
          id="file-input"
          type="file"
          accept={accept}
          multiple={maxFiles > 1}
          onChange={handleFileSelect}
          className="hidden"
          {...props}
        />
        <div className="flex flex-row justify-center items-center w-full h-full space-x-2">
          <Icons name="file-upload" className="w-6 h-6 fill-dark" />
          <div className="flex flex-col justify-start items-start">
            <span className="text-dark font-medium text-xs">
              Choose Document
            </span>
            <span className="text-[#888888] font-light text-xs">
              {isDragActive
                ? "Drop the files here..."
                : "Drag & drop files here, or click to select files"}
            </span>
            {fileNames.length > 0 && (
              <div className="flex flex-col justify-start items-start">
                {fileNames.map((name, index) => (
                  <span
                    key={index}
                    className="text-[#888888] font-light text-xs"
                  >
                    {name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDropzone;
