import { describe, test, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DropZone } from './DropZone';

describe('Components | DropZone', () => {
  const mockOnFileLoaded = jest.fn();

  beforeEach(() => {
    mockOnFileLoaded.mockClear();
  });

  test('it should render', () => {
    render(<DropZone placeholder="Click or drop your file" />);

    const dropZone = screen.getByTestId('drop-zone');

    expect(dropZone).toBeTruthy();
  });

  test('it should render with an invalid file', () => {
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });

    render(
      <DropZone
        placeholder="Click or drop your file"
        allowed={['jpeg', 'png']}
      />,
    );

    const dropZone = screen.getByTestId('drop-zone');

    fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [file],
      },
    });

    expect(
      screen.getByText('Oups! Fichier non autorisé. Autorisé: jpeg,png'),
    ).toBeTruthy();
  });

  test('it should render with a file and a valid type', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    render(
      <DropZone
        placeholder="Click or drop your file"
        allowed={['jpeg', 'png']}
      />,
    );

    const dropZone = screen.getByTestId('drop-zone');

    fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [file],
      },
    });

    expect(screen.getByText('hello.png')).toBeTruthy();
  });

  test('it should handle file drop correctly', () => {
    const file = new File(['content'], 'example.yaml', { type: 'text/yaml' });
    const onFileLoadedMock = jest.fn();

    render(
      <DropZone
        placeholder="Click or drop your file"
        allowed={['yaml']}
        onFileLoaded={onFileLoadedMock}
      />,
    );

    const dropZone = screen.getByTestId('drop-zone');

    fireEvent.drop(dropZone, {
      dataTransfer: {
        items: [
          {
            kind: 'file',
            getAsFile: () => file,
          },
        ],
      },
    });

    expect(onFileLoadedMock).toHaveBeenCalledWith(file);
    expect(screen.getByText('example.yaml')).toBeTruthy();
  });

  test('it should handle drag over correctly with a valid file', () => {
    render(<DropZone placeholder="Click or drop your file" />);

    const dropZone = screen.getByTestId('drop-zone');

    fireEvent.dragOver(dropZone);
  });

  test('devrait rejeter un fichier avec une extension non autorisée', () => {
    render(
      <DropZone
        placeholder="Déposez votre fichier"
        onFileLoaded={mockOnFileLoaded}
        allowed={['yaml']}
      />,
    );

    const dropZone = screen.getByTestId('drop-zone');

    const file = new File(['contenu'], 'test.txt', {
      type: 'text/plain',
    });
    const dropEvent = createDropEvent([file]);

    fireEvent.drop(dropZone, dropEvent);
    expect(mockOnFileLoaded).toHaveBeenCalledWith(null);
    expect(
      screen.getByText('Oups! Fichier non autorisé. Autorisé: yaml'),
    ).toBeTruthy();
  });

  test('it should handle file change correctly with a valid file', () => {
    const onFileLoadedMock = jest.fn();
    render(
      <DropZone
        placeholder="Déposez votre fichier"
        onFileLoaded={onFileLoadedMock}
        allowed={['yaml']}
      />,
    );

    const file = new File(['contenu'], 'test.yaml', {
      type: 'application/yaml',
    });
    const input = screen.getByTestId('upload-input');

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    expect(onFileLoadedMock).toHaveBeenCalledWith(file);
    expect(screen.getByText('test.yaml')).toBeTruthy();
  });

  test('it should reject the change with an invalid file via input', () => {
    render(
      <DropZone
        placeholder="Déposez votre fichier"
        onFileLoaded={mockOnFileLoaded}
        allowed={['yaml']}
      />,
    );
    const file = new File(['contenu'], 'test.txt', { type: 'text/plain' });
    const input = screen.getByTestId('upload-input');
    fireEvent.change(input, { target: { files: [file] } });
    expect(mockOnFileLoaded).toHaveBeenCalledWith(null);
    expect(
      screen.getByText('Oups! Fichier non autorisé. Autorisé: yaml'),
    ).toBeTruthy();
  });
});

function createDropEvent(files: File[]) {
  return {
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      type: ['Files'],
    },
  };
}
