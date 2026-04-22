import './Tabs.css'

interface TabProps {
  tabs: { id: string; label: string }[]
  activeTab: string
  onTabChange: (id: string) => void
}

export default function Tabs({ tabs, activeTab, onTabChange }: TabProps) {
  return (
    <div className="tabs-container">
      <div className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-indicator"></div>
    </div>
  )
}
