import React from "react"

const Footer: React.FC = () => {
    return (
        <footer className="text-center">
            <div className="text-[#264653] text-sm text-center mt-8 mb-4">
                {`© ${new Date().getFullYear()} Copyright: JsSearch`}
            </div>
        </footer>
    )
}

export default Footer
