const Header = () => {
    return (
        <>
            {/* Added styling to the wrapper to give it structure and padding */}
            <div className="w-full border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
                
                {/* Fixed layout by using flexbox to align the logo image and text horizontally */}
                <div className="mx-auto flex max-w-[380px] items-center gap-3">
                    
                    {/* CRITICAL FIX: Changed "/public/logo.png" to "/logo.png" */}
                    <img 
                        src="/logo.png" 
                        alt="Company Logo" 
                        className="h-14 w-14 object-contain" 
                    />
                    
                    {/* Styled the text to look bold, clean, and professional */}
                    <h1 className="text-xl font-bold tracking-wide text-gray-800">
                        SafaGunj
                    </h1>    
                    
                </div>
            </div>
        </>
    )
}

export default Header;