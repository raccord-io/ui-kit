import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from './Tag';

describe('Components | Tag', () => {
  /*
    TESTS FOR DEFAULT STATE
  */
  test('it should render', () => {
    render(<Tag color="neutral" content="neutral color" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toBeTruthy();
  });

  test(`it shouldn't have cursor-pointer class`, () => {
    render(<Tag color="neutral" content="neutral color" />);

    let tag = screen.getByTestId('tag-button');

    expect(tag).not.toHaveClass('cursor-pointer');
  });

  test('it should have neutral class with 15% opacity', () => {
    render(<Tag color="neutral" content="neutral color" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-primary/[.15]');
  });

  test('it should have blue class with 15% opacity', () => {
    render(<Tag color="blue" content="blue color" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-blue-r-300/[.15]');
  });

  test('it should have green class with 15% opacity', () => {
    render(<Tag color="green" content="green color" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-green-r-300/[.15]');
  });

  test('it should have red class with 15% opacity', () => {
    render(<Tag color="red" content="red color" />);

    let tag = screen.getByTestId('tag');

    expect(tag).toHaveClass('bg-red-r-300/[.15]');
  });

  /*
    TEST FOR CLICKABLE STATE
  */
  test('it should have cursor-pointer class', () => {
    render(
      <Tag
        color="neutral"
        content="neutral color"
        onClick={() => console.log('clicked')}
      />,
    );

    let tag = screen.getByTestId('tag-button');

    expect(tag).toHaveClass('cursor-pointer');
  });
});
