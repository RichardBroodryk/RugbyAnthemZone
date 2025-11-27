import { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h1>Something went wrong</h1>
            <p>We're sorry, but something unexpected happened.</p>
            
            <div className="error-details">
              <details>
                <summary>Error Details (for developers)</summary>
                <p>{this.state.error && this.state.error.toString()}</p>
                <p>Component Stack:</p>
                <pre>{this.state.errorInfo?.componentStack}</pre>
              </details>
            </div>

            <div className="error-actions">
              <button className="error-btn primary" onClick={this.handleReset}>
                🔄 Try Again
              </button>
              <button className="error-btn secondary" onClick={this.handleGoHome}>
                🏠 Go Home
              </button>
            </div>
            
            <div className="support-info">
              <p>If the problem continues, please contact support.</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;