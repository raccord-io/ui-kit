import { describe, it, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './Select';

describe('Select', () => {
  it('renders select content', () => {
    const onClickMock = jest.fn();

    render(
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" onClick={onClickMock} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    const trigger = screen.getByText('Select a fruit');

    fireEvent.click(trigger);

    const content = screen.getByTestId('select-content');

    expect(content).toBeTruthy();
  });
});
