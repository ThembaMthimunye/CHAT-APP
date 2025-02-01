import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await conversation.save();
    await newMessage.save();
    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sending the message", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const {id:userToChatId}=req.params;
    const senderId = req.user._id;

    const conversation=await Conversation.findOne({})



  } catch (error) {
    console.log("Error in geting Messages the message", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
