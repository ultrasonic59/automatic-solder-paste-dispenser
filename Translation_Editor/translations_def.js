var def =
{
	"messages": [
		{
			"id": "SettingsCalibrationDone"
		},
		{
			"id": "SettingsCalibrationWarning"
		},
		{
			"id": "SettingsResetWarning"
		},
		{
			"id": "UVLOWarningString",
			"maxLen": 8
		},
		{
			"id": "UndervoltageString",
			"maxLen": 16
		},
		{
			"id": "InputVoltageString",
			"maxLen": 11,
			"note": "Preferably end with a space"
		},
		{
			"id": "WarningTipTempString",
			"maxLen": 12,
			"note": "Preferably end with a space"
		},
		{
			"id": "BadTipString",
			"maxLen": 8
		},
		{
			"id": "SleepingSimpleString",
			"maxLen": 4
		},
		{
			"id": "SleepingAdvancedString",
			"maxLen": 16
		},
		{
			"id": "WarningSimpleString",
			"maxLen": 4
		},
		{
			"id": "WarningAdvancedString",
			"maxLen": 16
		},
		{
			"id": "SleepingTipAdvancedString",
			"maxLen": 6
		},
		{
			"id": "IdleTipString",
			"lenSum":
			{
				"fields": ["IdleTipString", "IdleSetString"],
				"maxLen": 10
			}
		},
		{
			"id": "IdleSetString",
			"lenSum":
			{
				"fields": ["IdleTipString", "IdleSetString"],
				"maxLen": 10
			},
			"note": "Preferably start with a space"
		},
		{
			"id": "TipDisconnectedString",
			"maxLen": 16
		},
		{
			"id": "SolderingAdvancedPowerPrompt",
			"maxLen": null
		},
		{
			"id": "OffString",
			"maxLen": 3
		},
		{
			"id": "ResetOKMessage",
			"maxLen": 8
		},
		{
			"id": "YourGainMessage",
			"maxLen": 8,
			"default": "Your Gain"
		},
		{
			"id": "SettingsResetMessage",
			"maxLen": 16,
			"default": "Settings were\nreset!"
		},
		{
			"id": "Mode1",
			"maxLen": 8,
			"default": "Mode 1"
		},
		{
			"id": "Mode2",
			"maxLen": 8,
			"default": "Mode 2"
		},
		{
			"id": "FastString",
			"maxLen": 5,
			"default": "FAST"
		},
		{
			"id": "SlowString",
			"maxLen": 5,
			"default": "SLOW"
		},
		{
			"id": "UserConfirmation",
			"maxLen": 8
		}		
	],
	"characters": [
		{
			"id": "SettingRightChar",
			"len": 1
		},
		{
			"id": "SettingLeftChar",
			"len": 1
		},
		{
			"id": "SettingAutoChar",
			"len": 1
		},
		{
			"id": "SettingFastChar",
			"len": 1
		},
		{
			"id": "SettingSlowChar",
			"len": 1
		},
		{
			"id": "SettingStartSolderingChar",
			"len": 1
		},
		{
			"id": "SettingStartSleepChar",
			"len": 1
		},
		{
			"id": "SettingStartSleepOffChar",
			"len": 1
		},
		{
			"id": "SettingStartNoneChar",
			"len": 1
		}
	],
	"metricCode": [
		{
			"id": "ModeMenu",
			"maxLen": 11
		},
		{
			"id": "SettingsMenu",
			"maxLen": 11
		}
	],
	"imperialCode": [
		{
			"id": "ModeMenu",
			"maxLen": 11
		},
		{
			"id": "SettingsMenu",
			"maxLen": 11
		}
	],
	"menuRootGroups": [
		{
			"id": "ModeMenu",
			"maxLen": 11
		},
		{
			"id": "SettingsMenu",
			"maxLen": 11
		}
	],
	"menuOptions": [
		{
			"id": "AutomaticSolderPasteDispenser",
			"maxLen": 20,
			"maxLen2": 30
		},
		{
			"id": "VacuumPickUp",
			"maxLen": 10,
			"maxLen2": 20
		},
		{
			"id": "Contrast",
			"maxLen": 4,
			"maxLen2": 9
		},
		{
			"id": "ScrollingSpeed",
			"maxLen": 6,
			"maxLen2": 11
		},
		{
			"id": "SettingsReset",
			"maxLen": 5,
			"maxLen2": 11
		}
	]
}
