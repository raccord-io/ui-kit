import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Button } from '../';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card';

describe('Components | Card', () => {
  test('it should render', () => {
    render(
      <Card>
        {' '}
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>test</CardContent>
        <CardFooter className="flex justify-between">
          <Button>Deploy</Button>
        </CardFooter>
      </Card>,
    );

    const card = screen.getByTestId('card');

    expect(card).toBeTruthy();
  });
});
