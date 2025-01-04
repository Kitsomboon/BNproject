import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const [numDevices, setNumDevices] = useState(1);
  const [devices, setDevices] = useState([
    { watt: "", hours: "", quantity: 1 },
  ]);
  const [totalPowerWh, setTotalPowerWh] = useState(null);
  const [recommendedSolarSize, setRecommendedSolarSize] = useState(null);
  const [totalInverterSize, setTotalInverterSize] = useState(null);
  const [batteryVoltage, setBatteryVoltage] = useState(12); // Default battery voltage
  const [recommendedBatterySize, setRecommendedBatterySize] = useState(null);
  const navigate = useNavigate();

  const handleNumDevicesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumDevices(value);

    const updatedDevices = [...devices];
    while (updatedDevices.length < value) {
      updatedDevices.push({ watt: "", hours: "", quantity: 1 });
    }
    while (updatedDevices.length > value) {
      updatedDevices.pop();
    }
    setDevices(updatedDevices);
  };

  const handleDeviceChange = (index, field, value) => {
    const updatedDevices = devices.map((device, i) =>
      i === index ? { ...device, [field]: value } : device
    );
    setDevices(updatedDevices);
  };

  const calculatePower = () => {
    const resultWh = devices.reduce((total, device) => {
      const watt = parseFloat(device.watt) || 0;
      const hours = parseFloat(device.hours) || 0;
      const quantity = parseInt(device.quantity, 10) || 0;
      return total + watt * hours * quantity;
    }, 0);
    setTotalPowerWh(resultWh.toFixed(2));

    // Solar Panel Size
    const sunHoursPerDay = 5;
    const solarSize = resultWh / sunHoursPerDay;
    setRecommendedSolarSize(solarSize.toFixed(2));

    // Inverter Size
    const inverterSize = devices.reduce((total, device) => {
      const watt = parseFloat(device.watt) || 0;
      const quantity = parseInt(device.quantity, 10) || 0;
      return total + watt * quantity;
    }, 0);
    setTotalInverterSize(inverterSize.toFixed(2));

    // Battery Size
    const batterySize = resultWh / (batteryVoltage * 0.6 * 0.85);
    setRecommendedBatterySize(batterySize.toFixed(2));
  };

  const resetFields = () => {
    setNumDevices(1);
    setDevices([{ watt: "", hours: "", quantity: 1 }]);
    setTotalPowerWh(null);
    setRecommendedSolarSize(null);
    setTotalInverterSize(null);
    setRecommendedBatterySize(null);
    setBatteryVoltage(12);
  };

  return (
    <div className="container mx-auto p-4 bg-[#d1543c] my-20">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        คำนวณค่าการใช้ไฟฟ้าหาขนาดแผงโซลาร์
      </h1>

      {/* Select Number of Devices */}
      <div className="flex flex-col mb-4">
        <p className="text-sm text-white text-bold underline mb-4">
          *การคำนวณจะเป็นจำนวนพลังงานทั้งหมดที่ใช้ทั้งวันใน 1 วัน
        </p>
        <label className="text-lg font-medium mb-2 text-white">
          จำนวนเครื่องใช้ไฟฟ้า:
        </label>

        <input
          type="number"
          value={numDevices}
          onChange={handleNumDevicesChange}
          min="1"
          className="p-2 border rounded-lg"
        />
      </div>

      {/* Input Boxes for Each Device */}
      {devices.map((device, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg bg-white">
          <h3 className="text-lg font-bold mb-2">
            เครื่องใช้ไฟฟ้าชนิดที่ {index + 1}
          </h3>
          <div className="flex flex-col mb-2">
            <label>ค่ากำลังไฟฟ้าของเครื่องใช้ไฟฟ้า (วัตต์/W):</label>
            <input
              type="number"
              value={device.watt}
              onChange={(e) =>
                handleDeviceChange(index, "watt", e.target.value)
              }
              placeholder="กรอกค่ากำลังไฟฟ้า (W)"
              className="p-2 border rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>จำนวนชั่วโมงที่ใช้งาน:</label>
            <input
              type="number"
              value={device.hours}
              onChange={(e) =>
                handleDeviceChange(index, "hours", e.target.value)
              }
              placeholder="กรอกจำนวนชั่วโมง"
              className="p-2 border rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label>จำนวนอุปกรณ์ที่ใช้งาน:</label>
            <input
              type="number"
              value={device.quantity}
              onChange={(e) =>
                handleDeviceChange(index, "quantity", e.target.value)
              }
              placeholder="กรอกจำนวนอุปกรณ์"
              className="p-2 border rounded-lg"
            />
          </div>
        </div>
      ))}

      {/* Battery Voltage */}
      <div className="flex flex-col mb-4">
        <label className="text-lg font-medium mb-2 text-white">
          แรงดันไฟฟ้าของแบตเตอรี่ (V):
        </label>
        <input
          type="number"
          value={batteryVoltage}
          onChange={(e) => setBatteryVoltage(parseFloat(e.target.value) || 12)}
          placeholder="กรอกแรงดันไฟฟ้าแบตเตอรี่ (เช่น 12 หรือ 24)"
          className="p-2 border rounded-lg"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={calculatePower}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          คำนวณ
        </button>
        <button
          onClick={resetFields}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          ล้างค่า
        </button>
      </div>

      {/* Result Box */}
      {totalPowerWh && (
        <div className="mt-6 p-4 border rounded-lg bg-green-100">
          <h2 className="text-xl font-bold">ผลลัพธ์:</h2>
          <p className="text-lg">
            การใช้พลังงานทั้งหมด:
            <span className="font-bold"> {totalPowerWh} Wh</span>
          </p>
          <p className="text-lg">
            พลังงานในหน่วยจูล:
            <span className="font-bold">
              {" "}
              {(totalPowerWh * 3600).toFixed(2)} J
            </span>
          </p>
          <p className="text-lg">
            พลังงานในหน่วยกิโลวัตต์-ชั่วโมง:
            <span className="font-bold">
              {" "}
              {(totalPowerWh / 1000).toFixed(3)} kWh
            </span>
          </p>
          <p className="text-lg">
            ขนาดของโซล่าร์เซลล์ที่แนะนำ:
            <span className="font-bold"> {recommendedSolarSize} W</span>
          </p>
          <p className="text-lg">
            ขนาดเครื่องแปลงกระแสไฟฟ้าที่แนะนำ (Power Inverter):
            <span className="font-bold"> {totalInverterSize} W</span>
          </p>
          <p className="text-lg">
            ขนาดแบตเตอรี่ที่แนะนำ (Battery):
            <span className="font-bold"> {recommendedBatterySize} Ah</span>
          </p>
        </div>
      )}

      {/* Back to Customer Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/customer")}
          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
          กลับไปที่หน้า Service
        </button>
      </div>
    </div>
  );
}

export default Calculator;
