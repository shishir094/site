const Content=()=>{
    return(
        <>
             {/* 2. THE MIDDLE SPRING: flex-grow expands to fill all extra space, forcing the footer down */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        
        {/* Your content layout wrapped inside a clean, centered, secure card */}
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="about">
            
            {/* Styled title header for Safa Gunj */}
            <h2 className="text-2xl font-bold text-blue-700 mb-4 tracking-tight">
              Why Regular Tank Cleaning Matters
            </h2>
            
            {/* Styled paragraph text with Tailwind for high mobile readability */}
            <p className="text-gray-600 leading-relaxed text-base space-y-4">
              Neglecting tank cleaning leads to noticeable degradation in water quality that filters alone cannot always fix.
              <br /><br />
              Neglecting your water tank invites invisible threats that can silently compromise your family's well-being. 
              From severe gastrointestinal illnesses to respiratory and skin infections, the consequences of contaminated 
              storage are far too grave to overlook. Taking proactive measures to maintain a hygienic tank is the most 
              effective defense. 
              <br /><br />
              <span className="font-semibold text-gray-800">
                Don't wait for health problems to arise — safeguard your health today with Safa Gunj by ensuring your water storage remains clean and secure.
              </span>
            </p>
            
          </div>
        </div>

      </main>
        </>
    )
}

export default Content