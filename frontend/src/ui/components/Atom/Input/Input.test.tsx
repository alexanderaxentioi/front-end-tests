import {render, screen} from '@testing-library/react';


const elementName = 'input';
const basicElement = <Input>input</Input>;

test('element exists', () => {
  render(basicElement);

  const root = screen.getByTestId(elementName + '-root');
  expect(root).toBeInTheDocument();
});
