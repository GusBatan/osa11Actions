import React from 'react';
import { render, screen } from '@testing-library/react';
import Persons from './Persons';

describe('Persons Component', () => {
  it('renders the list of persons', () => {
    const mockFilteredPersons = [
      { id: 1, name: 'Alice', number: '123-456' },
      { id: 2, name: 'Bob', number: '789-101' },
    ];

    render(<Persons filteredPersons={mockFilteredPersons} handleDelete={jest.fn()} />);

    // Check if names and numbers are rendered
    mockFilteredPersons.forEach((person) => {
      expect(screen.queryByText(`${person.name} ${person.number}`)).toBeTruthy();
    });

    // Check if delete buttons are rendered
    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
    expect(deleteButtons).toHaveLength(mockFilteredPersons.length);
  });
});
