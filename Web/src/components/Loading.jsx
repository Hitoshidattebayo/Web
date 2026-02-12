import React from 'react';

const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: '#f8f9fa'
        }}>
            <div style={{
                width: '50px',
                height: '50px',
                border: '5px solid #e0e0e0',
                borderTop: '5px solid var(--color-primary, #3498db)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }} />
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Loading;
