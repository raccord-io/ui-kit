import {
  ComponentPropsWithoutRef,
  useRef,
  useState,
  ChangeEvent,
  DragEvent,
} from 'react';
import { FiArchive, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

interface IDragDropProps extends ComponentPropsWithoutRef<'input'> {
  placeholder?: string;
  allowed?: string[];
  onFileLoaded?: (file: File | null) => void;
}

// Jest fails with Enums
// https://github.com/kulshekhar/ts-jest/issues/3397
// this would be Status enum { NORMAL = "normal", ...}
const NORMAL = 'normal';
const FAILED = 'failed';
const LOADED = 'loaded';
const Status = { NORMAL, FAILED, LOADED };

const LoadedStatus = {
  normal: {
    style: 'text-primary',
    icon: <FiArchive className="w-12 h-12" />,
  },
  failed: {
    style: 'text-s-error',
    icon: <FiAlertCircle className="w-12 h-12" />,
  },
  loaded: {
    style: 'text-s-success',
    icon: <FiCheckCircle className="w-12 h-12" />,
  },
};

export function DragDrop(props: IDragDropProps) {
  const { placeholder, onFileLoaded, allowed = ['.yaml'] } = props;

  const inputFileRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(Status.NORMAL);
  const [fileName, setFileName] = useState(placeholder);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const loadedClass = LoadedStatus[isLoaded].style;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const loadedIcon = LoadedStatus[isLoaded].icon;

  function isValidFile(file: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!allowed.includes(file.split('.').pop())) {
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
      [...files].forEach((file) => {
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
      [...e.dataTransfer.items].forEach((item) => {
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
      [...e.dataTransfer.files].forEach((file) => {
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
    <form>
      <div
        data-testid="drag-drop"
        className="w-full"
        id="drop_zone"
        onDrop={handleOnDropHandler}
        onDragOver={handleDragOverHandler}
      >
        <label
          className={`flex justify-center w-full h-24 px-4 transition ${loadedClass}
                        bg-tertiary appearance-none cursor-pointer rounded-sm`}
        >
          <span className="flex items-center space-x-2">
            {loadedIcon}
            <span className="pl-5 mas-body2">{fileName}</span>
          </span>
          <input
            onChange={handleOnChange}
            ref={inputFileRef}
            accept="*.yaml"
            type="file"
            name="upload"
            className="hidden"
          />
        </label>
      </div>
    </form>
  );
}
