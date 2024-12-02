import { describe, test, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '..';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

describe('Components | Dialog', () => {
  test('it should render', () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" model="outline">
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            {/* <Input
            id="name"
            label="Name"
            defaultValue="Pedro Duarte"
            className="col-span-3 w-full"
          />
          <Input
            id="username"
            label="Username"
            defaultValue="@peduarte"
            className="col-span-3 w-full"
          /> */}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );
  });

  test('it should fire onClick event', () => {
    const somethingClicked = jest.fn();

    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={somethingClicked}>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            {/* <Input
            id="name"
            label="Name"
            defaultValue="Pedro Duarte"
            className="col-span-3 w-full"
          />
          <Input
            id="username"
            label="Username"
            defaultValue="@peduarte"
            className="col-span-3 w-full"
          /> */}
          </div>
          <DialogFooter>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );

    const button = screen.getByTestId('button');

    fireEvent.click(button);
    expect(somethingClicked).toHaveBeenCalled();

    const content = screen.getByTestId('dialog-content');
    expect(content).toBeTruthy();
  });
});
