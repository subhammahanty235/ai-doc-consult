
interface ResponseTemplate {
  keywords: string[];
  response: string;
  followUpQuestions: string[];
  recommendConsultation: boolean;
}

export const mockResponses: Record<string, ResponseTemplate[]> = {
  "dr-emily-pediatric": [
    {
      keywords: ["fever", "temperature", "hot"],
      response: "Based on your description, it sounds like your child has a fever. Fever is the body's natural response to infection. For children, a temperature above 100.4°F (38°C) is considered a fever. If your child is older than 3 months and the fever is not too high, you can try giving them children's acetaminophen or ibuprofen and ensure they're drinking plenty of fluids.",
      followUpQuestions: [
        "How long has your child had the fever?",
        "Is your child showing any other symptoms like cough or rash?",
        "Has your child been exposed to any sick individuals recently?"
      ],
      recommendConsultation: false
    },
    {
      keywords: ["rash", "skin", "itchy", "spots"],
      response: "Your description suggests your child has developed a rash. Childhood rashes are common and can be caused by various factors including infections, allergic reactions, or heat. It's important to note if the rash is accompanied by other symptoms like fever or if it blanches (turns white) when pressed.",
      followUpQuestions: [
        "When did you first notice the rash?",
        "Does the rash appear to be itchy or painful?",
        "Have you tried any treatments for the rash so far?"
      ],
      recommendConsultation: true
    }
  ],
  "dr-james-cardio": [
    {
      keywords: ["chest pain", "heart", "pressure"],
      response: "Chest pain or pressure can be concerning symptoms that require attention. While it could be related to anxiety, muscle strain, or digestive issues, it's important not to dismiss the possibility of cardiovascular causes. I recommend seeking immediate medical attention for a proper evaluation.",
      followUpQuestions: [
        "Does the pain radiate to your arm, jaw, or back?",
        "Is the pain accompanied by shortness of breath or sweating?",
        "Do you have any known heart conditions or risk factors?"
      ],
      recommendConsultation: true
    },
    {
      keywords: ["blood pressure", "hypertension", "high"],
      response: "High blood pressure (hypertension) is a common condition that can lead to serious health problems if left untreated. Lifestyle modifications like reducing sodium intake, regular exercise, maintaining a healthy weight, limiting alcohol, and managing stress can help. It's also important to take prescribed medications consistently.",
      followUpQuestions: [
        "Have you been monitoring your blood pressure regularly?",
        "What lifestyle changes have you implemented so far?",
        "Are you currently taking any medications for blood pressure?"
      ],
      recommendConsultation: false
    }
  ],
  "dr-sarah-derma": [
    {
      keywords: ["acne", "pimple", "breakout"],
      response: "Acne is a common skin condition that occurs when hair follicles become plugged with oil and dead skin cells. It can be influenced by hormones, certain medications, diet, and stress. A consistent skincare routine with gentle cleansing and non-comedogenic products can help. For persistent or severe acne, prescription treatments may be necessary.",
      followUpQuestions: [
        "How long have you been experiencing acne?",
        "What products are you currently using on your skin?",
        "Have you noticed any triggers that worsen your acne?"
      ],
      recommendConsultation: false
    },
    {
      keywords: ["mole", "changing", "skin cancer"],
      response: "Changes in moles can be a potential sign of skin cancer and should be evaluated by a dermatologist. I recommend using the ABCDE rule to assess: Asymmetry, Border irregularity, Color variation, Diameter larger than 6mm, and Evolution or change over time. Given your description, it would be best to have this examined by a healthcare professional soon.",
      followUpQuestions: [
        "How long have you noticed changes in the mole?",
        "Has the mole been bleeding or itching?",
        "Do you have a history of skin cancer in your family?"
      ],
      recommendConsultation: true
    }
  ],
  "dr-michael-neuro": [
    {
      keywords: ["headache", "migraine", "pain"],
      response: "Headaches can have many causes ranging from tension and stress to more serious conditions. Migraines specifically are characterized by severe, often one-sided headaches that may be accompanied by nausea, sensitivity to light and sound, and visual disturbances. Keeping a headache diary to track triggers, ensuring adequate hydration, and managing stress can help with prevention.",
      followUpQuestions: [
        "How frequently do you experience these headaches?",
        "Can you describe the pain pattern and any accompanying symptoms?",
        "Have you identified any triggers for your headaches?"
      ],
      recommendConsultation: false
    },
    {
      keywords: ["dizzy", "vertigo", "balance"],
      response: "Dizziness and vertigo can result from various causes, including inner ear problems, migraine, medication side effects, or neurological conditions. The sensation of spinning or imbalance can be disruptive to daily activities and may increase the risk of falls. Based on your description, a thorough evaluation would be beneficial to determine the underlying cause.",
      followUpQuestions: [
        "Is your dizziness constant or does it come in episodes?",
        "Does changing positions make the dizziness better or worse?",
        "Are you experiencing any hearing changes or ringing in the ears?"
      ],
      recommendConsultation: true
    }
  ],
  "dr-lisa-gynae": [
    {
      keywords: ["period", "menstrual", "irregular"],
      response: "Irregular periods can be caused by various factors including hormonal imbalances, stress, significant weight changes, excessive exercise, or conditions like polycystic ovary syndrome (PCOS). Tracking your cycle can help identify patterns and potential causes. It's generally recommended to consult with a healthcare provider if you experience significant changes in your menstrual cycle.",
      followUpQuestions: [
        "How long have your periods been irregular?",
        "Are your periods associated with significant pain or heavy bleeding?",
        "Have you noticed any other symptoms like weight changes or excessive hair growth?"
      ],
      recommendConsultation: false
    },
    {
      keywords: ["pregnant", "pregnancy", "test"],
      response: "If you suspect you might be pregnant, taking a home pregnancy test is a good first step. These tests measure the hormone hCG in your urine and are most accurate when taken after your missed period. If positive, it's important to begin prenatal care. If negative but your period is still delayed, you might consider retesting in a few days or consulting with a healthcare provider.",
      followUpQuestions: [
        "When was your last menstrual period?",
        "Have you taken a home pregnancy test yet?",
        "Are you experiencing any early pregnancy symptoms like nausea or breast tenderness?"
      ],
      recommendConsultation: true
    }
  ],
  "dr-david-ortho": [
    {
      keywords: ["back pain", "spine", "lower back"],
      response: "Back pain is extremely common and can result from muscle strain, poor posture, injury, or more chronic conditions like arthritis or disc problems. Most acute back pain improves with rest, gentle movement, and over-the-counter pain relievers. Maintaining proper posture, strengthening core muscles, and using proper lifting techniques can help prevent future episodes.",
      followUpQuestions: [
        "Where exactly is your back pain located?",
        "Does the pain radiate to your legs or cause any numbness or tingling?",
        "What activities seem to worsen or improve your pain?"
      ],
      recommendConsultation: false
    },
    {
      keywords: ["joint", "knee", "swollen", "arthritis"],
      response: "Joint pain and swelling can be caused by injury, overuse, or conditions like arthritis. If your symptoms include significant swelling, redness, warmth, or severe pain that limits movement, these could indicate inflammation or injury requiring medical attention. Based on your description, I would recommend having this evaluated by an orthopedic specialist.",
      followUpQuestions: [
        "Is the joint pain affecting one or multiple joints?",
        "Have you experienced any recent injuries to the affected area?",
        "How has this been affecting your daily activities?"
      ],
      recommendConsultation: true
    }
  ]
};

export const genericResponses = [
  "I understand your concern. Could you provide more details about your symptoms?",
  "Thank you for sharing that information. How long have you been experiencing these symptoms?",
  "I'd like to help you better. Can you describe if anything makes your condition better or worse?",
  "Based on what you've told me, it sounds like you're experiencing common symptoms. Let me ask a few more questions to better understand your situation.",
  "I appreciate you explaining your situation. Let me think about this for a moment to give you the best possible advice."
];

export const noMatchResponse = "I understand your concern. While I can provide general information, your specific situation would benefit from a more detailed assessment. I recommend scheduling a consultation with one of our human doctors for a more thorough evaluation. Would you like me to help arrange that?";
