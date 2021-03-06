import { delayMiliseconds } from '../../../env/bot.config';

const sleep = () =>
  new Promise(resolve => setTimeout(resolve, delayMiliseconds));

const deleteMessage = async (chatId, receivedMessageId, sentMessageId, bot) => {
  await sleep();
  await bot.deleteMessage(chatId, sentMessageId);
};

export default deleteMessage;
