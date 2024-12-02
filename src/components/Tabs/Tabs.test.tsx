import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('Components | Tabs', () => {
  test('it should render', () => {
    render(
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account</TabsContent>
        <TabsContent value="password">Password</TabsContent>
      </Tabs>,
    );

    const tabsContent = screen.getAllByTestId('tabs-content');

    expect(tabsContent).toHaveLength(2);
  });
});
