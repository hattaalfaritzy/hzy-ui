import { useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Icons, Message } from "@/components/commons";
import { cn } from "@/utils/cn";
import type { InputHTMLAttributes } from "react";

export interface IInputDropzoneProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onDrop" | "onChange" | "value" | "accept"
  > {
  className?: string;
  classNameLabel?: string;
  classNameWrapper?: string;
  label?: string;
  notes?: string;
  important?: boolean;
  errorMessage?: string;
  onDrop?: (acceptedFiles: File[]) => void;
  onChange?: (acceptedFiles: File[]) => void;
  value?: File[];
  accept?: Accept;
  maxFiles?: number;
}

export const InputDropzone = ({
  className,
  classNameLabel,
  classNameWrapper,
  label,
  notes,
  important,
  errorMessage,
  onDrop,
  onChange,
  value = [],
  accept,
  maxFiles = 1,
  ...props
}: IInputDropzoneProps) => {
  const [files, setFiles] = useState<File[]>(value);

  const handleUpload = (acceptedFiles: File[]) => {
    const newFiles = [...files, ...acceptedFiles];
    setFiles(newFiles);

    if (onDrop) {
      onDrop(acceptedFiles);
    }
    if (onChange) {
      onChange(newFiles);
    }
  };

  const handleFileDelete = (fileToDelete: File) => {
    const updatedFiles = files.filter((file) => file !== fileToDelete);
    setFiles(updatedFiles);

    if (onChange) {
      onChange(updatedFiles);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop: handleUpload,
      accept,
      maxFiles,
    });

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
          {important && (
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
      {files.length > 0 && (
        <div className="flex flex-col w-full pb-2 space-y-1">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center w-full p-1.5 bg-[#2842C8]/5 rounded"
            >
              <div className="flex flex-row justify-start items-center space-x-2">
                <Icons name="paper-clip" className="fill-dark w-4 h-4" />
                <span className="font-medium text-xs">{file.name}</span>
              </div>
              <Icons
                name="trash-outline"
                className="fill-error w-4 h-4 cursor-pointer"
                onClick={() => handleFileDelete(file)}
              />
            </div>
          ))}
        </div>
      )}
      <div
        {...getRootProps()}
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
        <input {...getInputProps()} {...props} type="file" className="hidden" />
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
