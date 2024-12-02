import { describe, test, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../';

import { Popover, PopoverContent, PopoverTrigger } from './Popover';

describe('Components | Popover', () => {
  test('it should render', () => {
    const somethingClicked = jest.fn();
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button data-testid="button" onClick={somethingClicked}>
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-f-primary">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>,
    );

    const button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(somethingClicked).toHaveBeenCalled();

    const popoverContent = screen.getByTestId('popover-content');

    expect(popoverContent).toBeTruthy();
  });
});
