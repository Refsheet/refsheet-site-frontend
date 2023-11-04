import React from 'react';

export default function Layout({children}: React.PropsWithChildren) {
    return <main className="shaded-background modal-page-content">
        <div className="modal-page-content">
            <div className="narrow-container">
                {children}
            </div>
        </div>
    </main>
}
