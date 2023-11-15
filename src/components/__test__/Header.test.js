import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { AuthProvider } from "@/utils/AuthContext";

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn(),
}));

test('renders Login button if isLoggedIn is false', () => {
  render(
    <AuthProvider>
      <Header />
    </AuthProvider>
  );

  expect(screen.getByRole('button', { name: /ingresar/i })).toBeInTheDocument();
});