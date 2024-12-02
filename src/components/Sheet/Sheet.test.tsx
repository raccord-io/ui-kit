import { describe, test, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button, Label } from '../';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet';

describe('Components | Sheet', () => {
  test('it should render', () => {
    const somethingClicked = jest.fn();

    render(
      <Sheet>
        <SheetTrigger asChild>
          <Button
            onClick={somethingClicked}
            variant="secondary"
            model="outline"
          >
            Open
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    const button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(somethingClicked).toHaveBeenCalled();

    const content = screen.getByTestId('sheet-content');
    expect(content).toBeTruthy();
  });
});
