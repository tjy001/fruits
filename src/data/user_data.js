
export const dataRef = {
    "apple-s1": 32,
    "apple-s2": 540,
    "pear-s1": 13,
    "pear-s2": 2003,
    "NonCitrus-s1": 50,
    "NonCitrus-s2": 73,
    "Citrus-s1": 1020,
    "Citrus-s2": 433,
    "orange-s1": 31,
    "orange-s2": 421,
    "orange-s3": 543,
    "lemon-s1": 32,
    "lemon-s2": 1,
    "lime-s1": 314,
    "cnb-1": 35,
    "cnb-2": 16
}

export const accessRef = {
    "apple": {
        subscriptions: ["apple-s1", "apple-s2"],
        tags: ["NonCitrus"]
    },
    "pear": {
        subscriptions: ["pear-s1", "pear-s2"],
        tags: ["NonCitrus", "CustomView1"]
    },
    "NonCitrus-site": {
        subscriptions: ["NonCitrus-s1", "NonCitrus-s2"],
        tags: ["NonCitrus"]
    },
    "Citrus-site": {
        subscriptions: ["Citrus-s1", "Citrus-s2"],
        tags: ["Citrus"]
    },
    "orange": {
        subscriptions: ["orange-s1", "orange-s2", "orange-s3"],
        tags: ["Citrus", "CustomView1"]
    },
    "lemon": {
        subscriptions: ["lemon-s1", "lemon-s2"],
        tags: ["Citrus", "CustomView1"]
    },
    "lime": {
        subscriptions: ["lime-s1"],
        tags: ["Citrus"]
    }
}

export const roleRef = {
    "NonCitrus-CIO": ["apple", "pear", "NonCitrus-Site"],
    "apple-Analyst": ["apple"],
    "lemon-Analyst": ["lemon"],
    "citrus-Analyst": ["orange", "lemon", "lime"],
    "shopkeeper": ["apple", "pear", "NonCitrus-Site", "Citrus-Site", "orange", "lemon", "lime"]
}

export const userRef = {
    "Cedric": "apple-Analyst",
    "Kenny": "orange-Analyst",
    "Dave": "NonCitrus-CIO",
    "Hanyang": "citrus-Analyst",
    "LHL": "shopkeeper"
}

export const tagRef = {
    "Citrus": ["Citrus-Site", "orange", "lemon", "lime"],
    "NonCitrus": ["apple", "pear", "NonCitrus-Site"],
    "CustomView1": ["pear", "orange", "lemon"]
}