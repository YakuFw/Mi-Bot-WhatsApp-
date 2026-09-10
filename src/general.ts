import { botInfo } from '../config/bot';

export const messages = {
  ownerInfo: () => `🤖 ${botInfo.name}\n👤 ${botInfo.owner.name}\n📱 ${botInfo.owner.contact}`,
  autoReply: () => `Hola 👋 soy ${botInfo.name}.\n\nContacto: ${botInfo.owner.contact}`
};
