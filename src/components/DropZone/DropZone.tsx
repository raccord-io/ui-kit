'use client';

import React, { ChangeEvent, DragEvent, forwardRef, useState } from 'react';

import { Check, CloudAlert, Inbox } from 'lucide-react';

import { cn } from '@/lib/utils';

interface IDragDropProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
  onFileLoaded?: (file: File | null) => void;
  allowed?: string[];
}

const Status = {
  NORMAL: 'normal',
  FAILED: 'failed',
  LOADED: 'loaded',
} as const;

const LoadedStatus = {
  normal: {
    style: 'text-text-tertiary',
    icon: <Inbox className="w-6 h-6" />,
  },
  failed: {
    style: 'text-text-error',
    icon: <CloudAlert className="w-6 h-6" />,
  },
  loaded: {
    style: 'text-text-success',
    icon: <Check className="w-6 h-6" />,
  },
};

const DropZone = forwardRef<HTMLInputElement, IDragDropProps>((props, ref) => {
  const { placeholder, onFileLoaded, allowed = ['.yaml'], className } = props;

  const [isLoaded, setIsLoaded] = useState<keyof typeof LoadedStatus>(
    Status.NORMAL,
  );
  const [fileName, setFileName] = useState<string>(placeholder);

  const loadedClass = LoadedStatus[isLoaded].style;
  const loadedIcon = LoadedStatus[isLoaded].icon;

  function isValidFile(file: string) {
    const fileExtension = file.split('.').pop()?.toLowerCase();
    if (!fileExtension || !allowed.includes(fileExtension)) {
      setIsLoaded(Status.FAILED);
      setFileName(
        `Oups! Fichier non autorisé. Autorisé: ${allowed.toString()}`,
      );
      onFileLoaded?.(null);
      return false;
    }
    return true;
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        if (!isValidFile(file.name.toLowerCase())) {
          return;
        } else {
          setIsLoaded(Status.LOADED);
          setFileName(file.name);

          onFileLoaded?.(file);
        }
      });
    }
  }

  function handleOnDropHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();

    if (e.dataTransfer.items) {
      Array.from(e.dataTransfer.items).forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();

          if (file && !isValidFile(file.name.toLowerCase() || '')) {
            return;
          } else {
            setIsLoaded(Status.LOADED);
            setFileName(file?.name || ''); // Added null check and fallback value

            onFileLoaded?.(file);
          }
        }
      });
    } else {
      Array.from(e.dataTransfer.files).forEach((file) => {
        if (!isValidFile(file.name.toLowerCase())) {
          return;
        } else {
          setIsLoaded(Status.LOADED);
          setFileName(file.name);

          onFileLoaded?.(file);
        }
      });
    }
  }

  function handleDragOverHandler(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <div
        data-testid="drop-zone"
        className="w-full"
        id="drop_zone"
        onDrop={handleOnDropHandler}
        onDragOver={handleDragOverHandler}
      >
        <label
          className={cn(
            'flex justify-center items-center w-full h-24 px-4 transition',
            loadedClass,
            'bg-bg-secondary hover:bg-bg-secondary/70 border-2 border-dashed border-border-secondary appearance-none cursor-pointer rounded-md font-WorkSans text-sm',
            className,
          )}
        >
          <div className="flex flex-col justify-center items-center space-y-2">
            {loadedIcon}
            <span>{fileName}</span>
          </div>
          <input
            onChange={handleOnChange}
            ref={ref}
            accept="*.yaml"
            type="file"
            name="upload"
            className="hidden"
            data-testid="upload-input"
          />
        </label>
      </div>
    </div>
  );
});

DropZone.displayName = 'DropZone';

export { DropZone };
