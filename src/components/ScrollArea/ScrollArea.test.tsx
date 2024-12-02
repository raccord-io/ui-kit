import { render, screen } from '@testing-library/react';

import { ScrollArea } from './ScrollArea';

describe('Components | ScrollArea', () => {
  test('it should render', () => {
    const tags = Array.from({ length: 50 }).map(
      (_, i, a) => `v0.1.0-beta-raccord.${a.length - i}`,
    );

    render(
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm text-f-primary font-medium leading-none">
            Tags
          </h4>
          {tags.map((tag, idx) => (
            <div key={idx} className="text-sm text-f-primary">
              {tag}
            </div>
          ))}
        </div>
      </ScrollArea>,
    );

    const scrollArea = screen.getByTestId('scroll-area');

    expect(scrollArea).toBeTruthy();
  });
});
