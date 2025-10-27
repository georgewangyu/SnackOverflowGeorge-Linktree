/**
 * Auto-discover image paths based on filenames
 * Just drop PNG files in /public/icons/ and JPG/PNG in /public/images/
 */

type IconKey = 'youtube' | 'github' | 'tiktok' | 'blog' | 'x' | 'discord' | 'twitch' | 'instagram' | 'linkedin' | 'substack' | 'newsletter' | 'camera' | 'scooter' | 'mug' | 'microphone';
type ImageKey = 'profile' | 'feature';

/**
 * Get icon path from filename - automatically maps:
 * "YouTube" -> /icons/youtube.png
 * "GitTok" -> /icons/github.png (handles case variations)
 */
export function getIconPath(appName: string, iconKey?: string): string {
  if (iconKey) {
    return `/icons/${iconKey}.png`;
  }

  // Auto-map common app names to icon files
  const iconMap: Record<string, IconKey> = {
    'youtube': 'youtube',
    'github': 'github',
    'tiktok': 'tiktok',
    'blog': 'blog',
    'x': 'x',
    'twitter': 'x',
    'discord': 'discord',
    'twitch': 'twitch',
    'instagram': 'instagram',
    'linkedin': 'linkedin',
    'substack': 'substack',
    'newsletter': 'newsletter',
  };

  const key = appName.toLowerCase().replace(/\s+/g, '').replace('channel', '');
  const iconFile = iconMap[key] || key;

  return `/icons/${iconFile}.png`;
}

/**
 * Get image path from key
 */
export function getImagePath(key: ImageKey, extension: 'jpg' | 'png' = 'jpg'): string {
  return `/images/${key}.${extension}`;
}

