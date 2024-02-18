import React, { useState } from 'react';

const SongRecommendationApp = () => {
  const [mood, setMood] = useState('');
  const [recommendedSong, setRecommendedSong] = useState('');

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const recommendSong = () => {
    // Define the mood-songs mapping
    const moodSongs = {
      happy: "Dákiti",
      sad: "Si Veo a Tu Mamá",
      energetic: "Safaera",
      relaxed: "Vete",
      excited: "La Noche de Anoche",
    };

    // Retrieve the recommended song based on the selected mood
    const song = moodSongs[mood];
    setRecommendedSong(song);
  };

  return (
    <div>
      <h1>Bad Bunny Song Recommendation</h1>
      <label htmlFor="moodSelect">Select your mood:</label>
      <select id="moodSelect" value={mood} onChange={handleMoodChange}>
        <option value="">Select</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="energetic">Energetic</option>
        <option value="relaxed">Relaxed</option>
        <option value="excited">Excited</option>
      </select>
      <br /> {/* Added line break */}
      <button onClick={recommendSong}>Recommend</button>
      {recommendedSong && (
        <div>
          <h2>Recommended Song:</h2>
          <p>{recommendedSong}</p>
        </div>
      )}
    </div>
  );
};

export default SongRecommendationApp;
