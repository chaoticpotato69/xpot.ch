import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pictures - xpot.ch',
    description: 'Photos from my life.',
};

export default function PicturesPage() {
    return (
        <div className="container">
            <div className="page-header">
                <h1>📷 Pictures</h1>
                <p>Photos of my dog, nature, and life moments.</p>
            </div>

            <div className="content-placeholder">
                <p>Photo gallery coming soon...</p>
            </div>
        </div>
    );
}
