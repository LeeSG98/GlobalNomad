const queryKeys = {
  registerData: () => ["registerData"] as const,
  registerDate: () => ["register/Date"] as const,
  registerStartTime: () => ["register/StartTime"] as const,
  registerEndTime: () => ["register/EndTime"] as const,

  activities: () => ["activities", 5] as const,
};

export default queryKeys;
