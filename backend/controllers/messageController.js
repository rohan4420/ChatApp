import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

/**
 * @route   POST /api/messages/:id
 * @desc    Send a message from sender to receiver
 * @access  Private
 */
export const sendMessage = async (req, res) => {
    try {
        // Extract sender and receiver IDs
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;

        // Check if message content is provided
        if (!message) {
            return res.status(400).json({ error: "Message content is required" });
        }

        // Find or create a conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            // Create a new conversation if not found
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        // Create a new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        // Add the message to the conversation
        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }

        // Respond with success message
        return res.status(200).json({
            message: "Message sent successfully",
            data: newMessage
        });

    } catch (error) {
        console.error("Error sending message:", error);
        return res.status(500).json({
            error: "An error occurred while sending the message"
        });
    }
};

/**
 * @route   GET /api/messages/:id
 * @desc    Get messages between sender and receiver
 * @access  Private
 */
export const getMessage = async (req, res) => {
    try {
        // Extract sender and receiver IDs
        const receiverId = req.params.id;
        const senderId = req.id;

        // Find the conversation between the sender and receiver
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages");

        // Check if conversation exists
        if (!conversation) {
            return res.status(404).json({ error: "Conversation not found" });
        }

        // Respond with the messages
        return res.status(200).json({
            message: "Messages retrieved successfully",
            data: conversation.messages
        });

    } catch (error) {
        console.error("Error retrieving messages:", error);
        return res.status(500).json({
            error: "An error occurred while retrieving the messages"
        });
    }
};
