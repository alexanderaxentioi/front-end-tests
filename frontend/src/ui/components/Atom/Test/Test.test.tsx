import { render, screen } from '@testing-library/react';
import { Test } from '@Ui/components/Atom/Test/Test';

const elementName = 'test';
const basicElement = <Test>Test</Test>;

test('element exists', () => {
  render(basicElement);

  const root = screen.getByTestId(elementName + '-root');
  expect(root).toBeInTheDocument();
});
