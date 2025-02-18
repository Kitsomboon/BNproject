import image1 from "/src/assets/so.jpg";

function Hero8() {
    return (
        <div
            className="relative w-full h-[600px] bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(50, 50, 50, 0), rgba(0, 0, 0, 0.7)), url(${image1})`,
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    <span style={{ color: "#16171f" }}>Organizational structure</span> B.N SOLAR POWER   </h1>
                    <p className="text-lg md:text-gl">
                        โครงสร้างองค์กร และคณะผู้บริหาร บริษัท บี.เอ็น. โซล่า เพาเวอร์ จำกัด
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero8;
