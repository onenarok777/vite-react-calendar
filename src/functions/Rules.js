// setRule : state
// value : ค่าที่ต้องการเช็ค
// fieldName : ชื่อ field ที่ต้องการเช็ค
// text: ข้อความแจ้ง Error

export const RuleInput = (setRule, value, fieldName, text, func) => {
  if (!func) {
    setRule((ru) => {
      ru[fieldName] = value.trim() == "" || value == null ? text : null;
      return ru;
    });
  }
};
