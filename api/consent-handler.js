export default async function handler(req, res) {
  const token = process.env.TG_TOKEN;
  const chatId = process.env.CHAT_ID;
  const text = `🚨 ВНИМАНИЕ: Она сказала ДА! 🚨\nВремя: ${new Date().toLocaleTimeString()}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text })
  });

  res.status(200).json({ message: 'Success' });
}