import shortid from 'shortid';
import UrlSchema from '../models/url.js';
import dotenv from 'dotenv';

dotenv.config();

const generateShortCode = () => shortid.generate();

export const createShortUrl = async (req, res) => {
  const { longUrl } = req.body;

  try {
    const existingMapping = await UrlSchema.findOne({ longUrl });

    if (existingMapping) {
      return res.json({ shortUrl: existingMapping.shortCode });
    }

    const shortCode = generateShortCode();
    const shortUrl = new UrlSchema({
      longUrl,
      shortCode:shortCode,
    });

    await shortUrl.save();
    res.json({ shortUrl: shortCode });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getOriginalUrl = async (req, res) => {
  const { id } = req.params;

  try {
    const urlMapping = await UrlSchema.findOne({ shortCode: id });

    if (!urlMapping) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    res.redirect(urlMapping.longUrl);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
