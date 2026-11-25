import { useState, useTransition, type ReactElement } from "react";
import { Home } from "./home";
import { Posts } from "./posts";
import { Contact } from "./contact";

type TabId = "home" | "posts" | "contact";

const TAB_LABELS: Record<TabId, string> = {
  home: "Beranda",
  posts: "Posting",
  contact: "Kontak",
};

const TAB_COMPONENTS: Record<TabId, () => ReactElement> = {
  home: Home,
  posts: Posts,
  contact: Contact,
};

/**
 * Komponen navigasi tab dengan `useTransition`.
 *
 * Dependency Inversion: logika transisi dikelola oleh React melalui useTransition;
 * komponen hanya menentukan state tab aktif dan merender konten yang sesuai.
 */
export default function TabTransition() {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: TabId) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const TabContent = TAB_COMPONENTS[activeTab];

  return (
    <div className="tab-demo" aria-label="Navigasi tab dengan transisi">
      <h3>Transisi Tab (useTransition)</h3>
      <div className="tabs" role="tablist" aria-label="Pilih tab">
        {(["home", "posts", "contact"] as TabId[]).map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`tab-${tab}`}
            onClick={() => handleTabChange(tab)}
            className={`tab-button ${activeTab === tab ? "tab-active" : ""}`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {isPending && <p className="status">Memuat konten...</p>}

      <div className="content" role="tabpanel">
        <TabContent />
      </div>
    </div>
  );
}
