import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Status - xpot.ch',
    description: 'Server and service status.',
};

export default function StatusPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>Status</h1>
                <p>Current status of my servers and services.</p>
            </div>

            <div className="grid grid-2">
                <div className="glass-card">
                    <h3>
                        <span className="status-dot online"></span>
                        Main Server
                    </h3>
                    <p className="status-online">Online</p>
                </div>

                <div className="glass-card">
                    <h3>
                        <span className="status-dot offline"></span>
                        Backup Server
                    </h3>
                    <p className="status-offline">Offline</p>
                </div>
            </div>

            <div className="content-placeholder" style={{ marginTop: '2rem' }}>
                <p>More services coming soon...</p>
            </div>
        </div>
    );
}
