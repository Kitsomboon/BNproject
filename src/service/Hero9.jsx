import image1 from "/src/assets/so.jpg";

function Hero8() {
    return (
        <div
            className="relative w-full h-[600px] bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgb(26, 24, 24), rgba(57, 50, 50, 0.66)), url(${image1})`,
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    <span style={{ color: "#ffffff" }}>Services</span>   </h1>
                    <p className="text-lg md:text-gl">
                    บริการติดตั้งพลังงานแสงอาทิตย์โดยทีมงานผู้เชี่ยวชาญ มุ่งเน้นคุณภาพและมาตรฐานระดับสูง เพื่อประสิทธิภาพและความพึงพอใจสูงสุดของลูกค้า
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero8;
