function Hero4() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-2xl font-bold mb-4">
        คุณวุฒิการศึกษา
        <span className="block border-t-2 border-purple-500 w-24 mx-auto mt-2"></span>
      </h2>
      <table className="w-full border border-gray-200 mt-4 text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ระดับการศึกษา</th>
            <th className="py-2 px-4 border-b">ปริญญา</th>
            <th className="py-2 px-4 border-b">สถาบัน</th>
            <th className="py-2 px-4 border-b">สาขา</th>
            <th className="py-2 px-4 border-b">ปีการศึกษา</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">ปริญญาตรี</td>
            <td className="py-2 px-4 border-b">วท.บ. (เทคนิคการแพทย์)</td>
            <td className="py-2 px-4 border-b">มหาวิทยาลัยเชียงใหม่</td>
            <td className="py-2 px-4 border-b">เทคนิคการแพทย์</td>
            <td className="py-2 px-4 border-b">ประเทศไทย [พ.ศ. 2522 – 2526]</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">ปริญญาโท</td>
            <td className="py-2 px-4 border-b">M.Sc. (Biochemistry)</td>
            <td className="py-2 px-4 border-b">มหาวิทยาลัยมหิดล</td>
            <td className="py-2 px-4 border-b">Biochemistry</td>
            <td className="py-2 px-4 border-b">ประเทศไทย [พ.ศ. 2527 – 2529]</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">ปริญญาเอก</td>
            <td className="py-2 px-4 border-b">Ph.D. (Biochemistry)</td>
            <td className="py-2 px-4 border-b">Auburn University</td>
            <td className="py-2 px-4 border-b">Biochemistry</td>
            <td className="py-2 px-4 border-b">The United States of America (1989 - 1992)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">หลักสูตรการป้องกันราชอาณาจักร (วปอ.)</td>
            <td className="py-2 px-4 border-b">รุ่นที่ 59</td>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b">พ.ศ. 2559 - 2560</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Hero4;
