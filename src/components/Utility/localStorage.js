const STORAGE_KEY = 'installedApps';

export const getInstalledApps = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const addInstalledApp = (app) => {
    const current = getInstalledApps();
    const exists = current.find((a) => a.id === app.id);
    if (!exists) {
        current.push(app);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    }
};

export const removeInstalledApp = (id) => {
    const current = getInstalledApps().filter((a) => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
};

export const isAppInstalled = (id) => {
    return getInstalledApps().some((a) => a.id === id);
};
