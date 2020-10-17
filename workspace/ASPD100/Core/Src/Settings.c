/*
 * Settings.c
 *
 *  Created on: Sep 22, 2020
 *      Author: Alan
 *
 *      This file holds the users settings and saves / restores them to the
 * devices flash
 */

#include "Settings.h"
//#include "Setup.h"
#include "../../configuration.h"
//#include "BSP.h"

#include "string.h"
volatile systemSettingsType systemSettings;

void saveSettings() {
	// First we erase the flash
	//flash_save_buffer((uint8_t*) &systemSettings, sizeof(systemSettingsType));
}

bool restoreSettings() {
	// We read the flash
	//flash_read_buffer((uint8_t*) &systemSettings, sizeof(systemSettingsType));

	// if the version is correct were done
	// if not we reset and save
	if (systemSettings.version != SETTINGSVERSION) {
		// probably not setup
		resetSettings();
		return true;
	}
	return false;
}

void resetSettings() {
	memset((void*) &systemSettings, 0, sizeof(systemSettingsType));

	systemSettings.SleepTime = SLEEP_TIME; // How many seconds/minutes we wait until going
	systemSettings.contrast = CONSTRAST_VALUE; // The default contrast is 50%
	systemSettings.version = SETTINGSVERSION;  // Store the version number to allow for easier upgrades
	systemSettings.isFirstStart = 0;  // TODO
	systemSettings.modeType = 0; //TODO

	saveSettings();  // Save defaults
}