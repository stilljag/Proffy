export default function timestampUTC(){
  let d = new Date()

  var created_at = d.getFullYear().toString() + "-";
  created_at += d.getMonth().toString().padStart(2, '0') + "-";
  created_at += d.getDate().toString().padStart(2, '0') + " ";
  created_at += d.getHours().toString().padStart(2, '0') + ":";
  created_at += d.getMinutes().toString().padStart(2, '0') + ":";
  created_at += d.getSeconds().toString().padStart(2, '0');

  return created_at
}