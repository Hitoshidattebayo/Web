import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '40px', background: 'white', color: '#333', fontFamily: 'monospace' }}>
                    <h1 style={{ color: '#e03131' }}>Something went wrong (Runtime Error)</h1>
                    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                        <h3 style={{ marginTop: 0 }}>Error:</h3>
                        <pre style={{ color: '#e03131', whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                        </pre>

                        <h3>Component Stack:</h3>
                        <pre style={{ fontSize: '0.9em', color: '#666', overflowX: 'auto' }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
