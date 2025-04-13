
function ProgressBar({ value }) {
    const progress = Math.min(Math.max(value, 0), 100); // Ensure value is between 0 and 100

    return (
        <div style={{ width: '100%', backgroundColor: '#e0e0df', borderRadius: '8px', overflow: 'hidden' }}>
            <div
                style={{
                    width: `${progress}%`,
                    backgroundColor: '#76c7c0',
                    height: '20px',
                    transition: 'width 0.3s ease-in-out',
                }}
            ></div>
        </div>
    );
}

export default ProgressBar