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
              नियमित रूपमा ट्याङ्की सफा गर्नु किन महत्त्वपूर्ण छ?
            </h2>
            
            {/* Styled paragraph text with Tailwind for high mobile readability */}
            <p className="text-gray-600 leading-relaxed text-base space-y-4">
              ट्याङ्कीको सरसफाइमा लापरवाही गर्दा पानीको गुणस्तरमा प्रष्ट रूपमा गिरावट आउँछ, जसलाई फिल्टरले मात्र पनि सधैं सुधार्न सक्दैन।

आफ्नो पानीको ट्याङ्कीलाई बेवास्ता गर्नाले त्यस्ता अदृश्य खतराहरू आउन सक्छन्, जसले सुटुक्क तपाईंको परिवारको स्वास्थ्य बिगार्न सक्छ। पेटको गम्भीर बिरामीदेखि श्वासप्रश्वास र छालाको संक्रमणसम्म, फोहोर ट्याङ्कीको परिणाम सोचेभन्दा भयानक हुन सक्छ। ट्याङ्कीलाई सधैं सफा र सुरक्षित राख्नु नै यसको सबैभन्दा ठूलो बचावट हो।
              <br /><br />
              <span className="font-semibold text-gray-800">
                स्वास्थ्य बिग्रेपछि पछुताउनु भन्दा आजै सजग बनौँ — 'सफा गञ्ज' सँगै आफ्नो ट्याङ्की सुरक्षित राखौँ, स्वास्थ्य जोगाऔँ।
              </span>
            </p>
            
          </div>
        </div>

      </main>
        </>
    )
}

export default Content