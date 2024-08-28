export const parseJson = (value?: string | null) => {
  try {
    if (!value) throw new Error("Invalid JSON!")
    else if (typeof value === "object") {
      return value
    }

    const cleaned = value.replace(/\\/g, "")
    return JSON.parse(cleaned)
  } catch (err) {
    return null
  }
}

export const parseJsonWithoutClean = (value?: string | null) => {
  try {
    if (!value) throw new Error("Invalid JSON!")
    else if (typeof value === "object") {
      return value
    }

    return JSON.parse(value)
  } catch (err) {
    return null
  }
}
