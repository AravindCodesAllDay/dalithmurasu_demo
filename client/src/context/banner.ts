import header1 from "/header1.png";
import header2 from "/header2.png";
import header4 from "/header3.png";
import header3 from "/header4.png";

export const categoryData: Record<
  string,
  { tag: string; photo: string; title: string; author: string; url: string }
> = {
  "பெரியார் பேசுகிறார்": {
    tag: "கட்டுரை",
    photo: header1,
    title: "பெரியார்: சமூக மாற்றத்தின் சுடர் விளக்கு",
    author: "மு.ஆனந்தன்",
    url: "/periyar_speaks",
  },
  "பாபாசாகேப் பேசுகிறார்": {
    tag: "வரலாறு",
    photo: header2,
    title: "பாபாசாகேப் ஆம்பேட்கரின் அரசியல் பார்வைகள்",
    author: "சாந்தி பாஸ்கர்",
    url: "/babasaheb_speaks",
  },
  "நீல சிந்தனைகள்": {
    tag: "புதுமை",
    photo: header3,
    title: "நீல சிந்தனைகள்: நவீன தலித் சிந்தனையின் தேடல்கள்",
    author: "ரவிக்குமார்",
    url: "/blue_thoughts",
  },
  "தலித் முரசு களஞ்சியம்": {
    tag: "ஆவணம்",
    photo: header4,
    title: "தலித் முரசு பத்திரிகையின் வரலாற்று பங்களிப்பு",
    author: "கே.அருண்",
    url: "/dalit_murasu_archive",
  },
};
