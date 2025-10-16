import React, { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {

    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
   
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600">
              Oops! Something went wrong.
            </h2>
            <p className="text-gray-600 mt-2">
              {this.state.error?.message || 'Please try again later.'}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
