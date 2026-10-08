/** Titles and icons of the achievements the database awards (keys match `learning_check_achievements`). */
export interface AchievementInfo { key: string; icon: string; title: string; hint: string }

export const ACHIEVEMENTS: AchievementInfo[] = [
  { key: 'first_lesson', icon: '🌱', title: 'Birinchi qadam', hint: 'Birinchi darsni tugating' },
  { key: 'words_100', icon: '📚', title: '100 ta so\'z', hint: '10 ta dars tugating' },
  { key: 'words_300', icon: '📖', title: '300 ta so\'z', hint: '30 ta dars tugating' },
  { key: 'words_500', icon: '🎓', title: '500 ta so\'z', hint: '50 ta dars tugating' },
  { key: 'unit_passed', icon: '✅', title: 'Bosqich testi', hint: 'Birinchi bosqich testidan o\'ting' },
  { key: 'units_5', icon: '🏅', title: '5 ta bosqich', hint: '5 ta bosqich testidan o\'ting' },
  { key: 'level_up', icon: '🚀', title: 'Yangi daraja', hint: 'Keyingi darajaga o\'ting' },
  { key: 'perfect_lesson', icon: '💯', title: 'Zo\'r natija', hint: 'Darsni xatosiz tugating' },
  { key: 'streak_3', icon: '🔥', title: '3 kun ketma-ket', hint: '3 kun ketma-ket o\'qing' },
  { key: 'streak_7', icon: '🔥', title: 'Bir hafta', hint: '7 kun ketma-ket o\'qing' },
  { key: 'streak_14', icon: '⚡', title: 'Ikki hafta', hint: '14 kun ketma-ket o\'qing' },
  { key: 'streak_30', icon: '🌟', title: 'Bir oy', hint: '30 kun ketma-ket o\'qing' },
  { key: 'streak_100', icon: '👑', title: '100 kun', hint: '100 kun ketma-ket o\'qing' },
  { key: 'xp_500', icon: '✨', title: '500 XP', hint: '500 XP to\'plang' },
  { key: 'xp_2000', icon: '💎', title: '2 000 XP', hint: '2 000 XP to\'plang' },
  { key: 'xp_10000', icon: '🏆', title: '10 000 XP', hint: '10 000 XP to\'plang' },
  { key: 'first_follower', icon: '🤝', title: 'Birinchi obunachi', hint: 'Kimdir sizga obuna bo\'ldi' },
  { key: 'followers_10', icon: '🌍', title: '10 ta obunachi', hint: '10 kishi sizga obuna bo\'ldi' },
  { key: 'ielts_writing', icon: '✍️', title: 'IELTS Writing', hint: 'Birinchi essega baho oling' },
  { key: 'ielts_speaking', icon: '🎙️', title: 'IELTS Speaking', hint: 'Birinchi Speaking mashqini bajaring' },
];

export const achievementInfo = (key: string): AchievementInfo =>
  ACHIEVEMENTS.find((a) => a.key === key) ?? { key, icon: '🎖️', title: key, hint: '' };
